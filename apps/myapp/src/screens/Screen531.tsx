import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy531 } from '../generated/copy/copy531';
import { layout531 } from '../generated/layouts/layout531';
import { palette531 } from '../generated/palettes/palette531';

const RuntimeView531 = withUniwind(View);

export function Screen531() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView531 styleClassName={layout531.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy531.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy531.detail} / {palette531.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
