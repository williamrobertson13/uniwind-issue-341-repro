import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1028 } from '../generated/copy/copy1028';
import { layout1028 } from '../generated/layouts/layout1028';
import { palette1028 } from '../generated/palettes/palette1028';

const RuntimeView1028 = withUniwind(View);

export function Screen1028() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1028 styleClassName={layout1028.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1028.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1028.detail} / {palette1028.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
