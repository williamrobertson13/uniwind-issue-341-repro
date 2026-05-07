import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1226 } from '../generated/copy/copy1226';
import { layout1226 } from '../generated/layouts/layout1226';
import { palette1226 } from '../generated/palettes/palette1226';

const RuntimeView1226 = withUniwind(View);

export function Screen1226() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1226 styleClassName={layout1226.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1226.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1226.detail} / {palette1226.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
