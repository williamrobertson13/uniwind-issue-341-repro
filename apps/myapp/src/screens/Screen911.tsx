import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy911 } from '../generated/copy/copy911';
import { layout911 } from '../generated/layouts/layout911';
import { palette911 } from '../generated/palettes/palette911';

const RuntimeView911 = withUniwind(View);

export function Screen911() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView911 styleClassName={layout911.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy911.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy911.detail} / {palette911.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
