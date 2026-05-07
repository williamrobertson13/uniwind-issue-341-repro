import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1204 } from '../generated/copy/copy1204';
import { layout1204 } from '../generated/layouts/layout1204';
import { palette1204 } from '../generated/palettes/palette1204';

const RuntimeView1204 = withUniwind(View);

export function Screen1204() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1204 styleClassName={layout1204.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1204.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1204.detail} / {palette1204.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
