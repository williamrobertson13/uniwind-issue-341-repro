import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy135 } from '../generated/copy/copy135';
import { layout135 } from '../generated/layouts/layout135';
import { palette135 } from '../generated/palettes/palette135';

const RuntimeView135 = withUniwind(View);

export function Screen135() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView135 styleClassName={layout135.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy135.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy135.detail} / {palette135.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
