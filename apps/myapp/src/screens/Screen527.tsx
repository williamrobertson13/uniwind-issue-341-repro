import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy527 } from '../generated/copy/copy527';
import { layout527 } from '../generated/layouts/layout527';
import { palette527 } from '../generated/palettes/palette527';

const RuntimeView527 = withUniwind(View);

export function Screen527() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView527 styleClassName={layout527.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy527.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy527.detail} / {palette527.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
