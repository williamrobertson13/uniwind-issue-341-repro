import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy722 } from '../generated/copy/copy722';
import { layout722 } from '../generated/layouts/layout722';
import { palette722 } from '../generated/palettes/palette722';

const RuntimeView722 = withUniwind(View);

export function Screen722() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView722 styleClassName={layout722.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy722.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy722.detail} / {palette722.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
