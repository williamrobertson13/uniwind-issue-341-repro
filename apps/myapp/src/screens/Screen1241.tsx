import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1241 } from '../generated/copy/copy1241';
import { layout1241 } from '../generated/layouts/layout1241';
import { palette1241 } from '../generated/palettes/palette1241';

const RuntimeView1241 = withUniwind(View);

export function Screen1241() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1241 styleClassName={layout1241.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1241.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1241.detail} / {palette1241.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
