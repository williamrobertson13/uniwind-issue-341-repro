import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy77 } from '../generated/copy/copy77';
import { layout77 } from '../generated/layouts/layout77';
import { palette77 } from '../generated/palettes/palette77';

const RuntimeView77 = withUniwind(View);

export function Screen77() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView77 styleClassName={layout77.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy77.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy77.detail} / {palette77.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
