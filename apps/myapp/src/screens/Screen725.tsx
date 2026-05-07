import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy725 } from '../generated/copy/copy725';
import { layout725 } from '../generated/layouts/layout725';
import { palette725 } from '../generated/palettes/palette725';

const RuntimeView725 = withUniwind(View);

export function Screen725() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView725 styleClassName={layout725.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy725.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy725.detail} / {palette725.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
