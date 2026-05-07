import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy230 } from '../generated/copy/copy230';
import { layout230 } from '../generated/layouts/layout230';
import { palette230 } from '../generated/palettes/palette230';

const RuntimeView230 = withUniwind(View);

export function Screen230() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView230 styleClassName={layout230.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy230.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy230.detail} / {palette230.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
