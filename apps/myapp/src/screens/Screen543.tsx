import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy543 } from '../generated/copy/copy543';
import { layout543 } from '../generated/layouts/layout543';
import { palette543 } from '../generated/palettes/palette543';

const RuntimeView543 = withUniwind(View);

export function Screen543() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView543 styleClassName={layout543.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy543.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy543.detail} / {palette543.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
