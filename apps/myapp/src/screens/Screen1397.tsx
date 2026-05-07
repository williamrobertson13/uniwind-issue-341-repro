import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1397 } from '../generated/copy/copy1397';
import { layout1397 } from '../generated/layouts/layout1397';
import { palette1397 } from '../generated/palettes/palette1397';

const RuntimeView1397 = withUniwind(View);

export function Screen1397() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1397 styleClassName={layout1397.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1397.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1397.detail} / {palette1397.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
