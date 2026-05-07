import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy437 } from '../generated/copy/copy437';
import { layout437 } from '../generated/layouts/layout437';
import { palette437 } from '../generated/palettes/palette437';

const RuntimeView437 = withUniwind(View);

export function Screen437() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView437 styleClassName={layout437.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy437.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy437.detail} / {palette437.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
