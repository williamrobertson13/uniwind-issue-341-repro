import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy329 } from '../generated/copy/copy329';
import { layout329 } from '../generated/layouts/layout329';
import { palette329 } from '../generated/palettes/palette329';

const RuntimeView329 = withUniwind(View);

export function Screen329() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView329 styleClassName={layout329.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy329.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy329.detail} / {palette329.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
