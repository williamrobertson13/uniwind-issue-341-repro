import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy47 } from '../generated/copy/copy47';
import { layout47 } from '../generated/layouts/layout47';
import { palette47 } from '../generated/palettes/palette47';

const RuntimeView47 = withUniwind(View);

export function Screen47() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView47 styleClassName={layout47.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy47.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy47.detail} / {palette47.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
