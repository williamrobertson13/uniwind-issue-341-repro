import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1176 } from '../generated/copy/copy1176';
import { layout1176 } from '../generated/layouts/layout1176';
import { palette1176 } from '../generated/palettes/palette1176';

const RuntimeView1176 = withUniwind(View);

export function Screen1176() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1176 styleClassName={layout1176.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1176.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1176.detail} / {palette1176.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
