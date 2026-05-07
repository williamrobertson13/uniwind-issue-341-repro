import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy89 } from '../generated/copy/copy89';
import { layout89 } from '../generated/layouts/layout89';
import { palette89 } from '../generated/palettes/palette89';

const RuntimeView89 = withUniwind(View);

export function Screen89() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView89 styleClassName={layout89.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy89.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy89.detail} / {palette89.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
