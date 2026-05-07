import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy65 } from '../generated/copy/copy65';
import { layout65 } from '../generated/layouts/layout65';
import { palette65 } from '../generated/palettes/palette65';

const RuntimeView65 = withUniwind(View);

export function Screen65() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView65 styleClassName={layout65.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy65.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy65.detail} / {palette65.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
