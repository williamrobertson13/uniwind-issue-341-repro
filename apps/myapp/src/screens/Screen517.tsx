import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy517 } from '../generated/copy/copy517';
import { layout517 } from '../generated/layouts/layout517';
import { palette517 } from '../generated/palettes/palette517';

const RuntimeView517 = withUniwind(View);

export function Screen517() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView517 styleClassName={layout517.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy517.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy517.detail} / {palette517.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
