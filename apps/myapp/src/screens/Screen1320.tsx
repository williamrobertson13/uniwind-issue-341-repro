import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1320 } from '../generated/copy/copy1320';
import { layout1320 } from '../generated/layouts/layout1320';
import { palette1320 } from '../generated/palettes/palette1320';

const RuntimeView1320 = withUniwind(View);

export function Screen1320() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1320 styleClassName={layout1320.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1320.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1320.detail} / {palette1320.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
