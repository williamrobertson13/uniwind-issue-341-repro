import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy966 } from '../generated/copy/copy966';
import { layout966 } from '../generated/layouts/layout966';
import { palette966 } from '../generated/palettes/palette966';

const RuntimeView966 = withUniwind(View);

export function Screen966() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView966 styleClassName={layout966.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy966.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy966.detail} / {palette966.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
