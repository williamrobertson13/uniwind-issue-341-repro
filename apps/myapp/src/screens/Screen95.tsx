import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy95 } from '../generated/copy/copy95';
import { layout95 } from '../generated/layouts/layout95';
import { palette95 } from '../generated/palettes/palette95';

const RuntimeView95 = withUniwind(View);

export function Screen95() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView95 styleClassName={layout95.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy95.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy95.detail} / {palette95.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
