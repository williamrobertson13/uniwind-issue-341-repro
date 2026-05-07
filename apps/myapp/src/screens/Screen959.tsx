import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy959 } from '../generated/copy/copy959';
import { layout959 } from '../generated/layouts/layout959';
import { palette959 } from '../generated/palettes/palette959';

const RuntimeView959 = withUniwind(View);

export function Screen959() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView959 styleClassName={layout959.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy959.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy959.detail} / {palette959.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
