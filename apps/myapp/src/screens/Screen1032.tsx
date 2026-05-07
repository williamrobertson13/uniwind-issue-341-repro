import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1032 } from '../generated/copy/copy1032';
import { layout1032 } from '../generated/layouts/layout1032';
import { palette1032 } from '../generated/palettes/palette1032';

const RuntimeView1032 = withUniwind(View);

export function Screen1032() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1032 styleClassName={layout1032.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1032.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1032.detail} / {palette1032.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
