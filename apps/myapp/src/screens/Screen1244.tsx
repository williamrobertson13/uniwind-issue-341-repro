import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1244 } from '../generated/copy/copy1244';
import { layout1244 } from '../generated/layouts/layout1244';
import { palette1244 } from '../generated/palettes/palette1244';

const RuntimeView1244 = withUniwind(View);

export function Screen1244() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1244 styleClassName={layout1244.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1244.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1244.detail} / {palette1244.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
