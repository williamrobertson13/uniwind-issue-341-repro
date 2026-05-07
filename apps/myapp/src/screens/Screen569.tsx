import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy569 } from '../generated/copy/copy569';
import { layout569 } from '../generated/layouts/layout569';
import { palette569 } from '../generated/palettes/palette569';

const RuntimeView569 = withUniwind(View);

export function Screen569() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView569 styleClassName={layout569.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy569.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy569.detail} / {palette569.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
