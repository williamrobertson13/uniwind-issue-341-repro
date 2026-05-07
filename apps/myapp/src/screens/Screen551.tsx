import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy551 } from '../generated/copy/copy551';
import { layout551 } from '../generated/layouts/layout551';
import { palette551 } from '../generated/palettes/palette551';

const RuntimeView551 = withUniwind(View);

export function Screen551() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView551 styleClassName={layout551.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy551.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy551.detail} / {palette551.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
