import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1156 } from '../generated/copy/copy1156';
import { layout1156 } from '../generated/layouts/layout1156';
import { palette1156 } from '../generated/palettes/palette1156';

const RuntimeView1156 = withUniwind(View);

export function Screen1156() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1156 styleClassName={layout1156.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1156.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1156.detail} / {palette1156.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
